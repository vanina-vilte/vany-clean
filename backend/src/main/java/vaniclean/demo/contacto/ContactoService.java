package vaniclean.demo.contacto;

import java.util.List;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import vaniclean.demo.exception.ResourceNotFoundException;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactoService {

    private final ContactoRepository repository;
    private final JavaMailSender mailSender;

    @Value("${app.mail.to}")
    private String destinatario;

    // Lista todas las consultas recibidas por el formulario de contacto, para la vista de admin
    public List<Contacto> getAll() {
        return repository.findAllByOrderByCreadoEnDesc();
    }

    public Contacto getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Consulta no encontrada con id: " + id));
    }

    public Contacto actualizarEstado(Long id, EstadoContacto estado) {
        Contacto contacto = getById(id);
        contacto.setEstado(estado);
        return repository.save(contacto);
    }

    public void eliminar(Long id) {
        if (!repository.existsById(id)) {
            throw new ResourceNotFoundException("Consulta no encontrada con id: " + id);
        }
        repository.deleteById(id);
    }

    public Contacto guardar(ContactoRequest request) {
        Contacto contacto = new Contacto();
        contacto.setNombre(request.nombre());
        contacto.setEmpresa(request.empresa());
        contacto.setTelefono(request.telefono());
        contacto.setEmail(request.email());
        contacto.setMensaje(request.mensaje());

        Contacto guardado = repository.save(contacto);
        enviarCopia(guardado);
        return guardado;
    }

    private void enviarCopia(Contacto contacto) {
        try {
            SimpleMailMessage mensaje = new SimpleMailMessage();
            mensaje.setTo(destinatario);
            mensaje.setSubject("Nueva consulta de " + contacto.getNombre());
            mensaje.setText("""
                    Nombre: %s
                    Empresa: %s
                    Teléfono: %s
                    Email: %s

                    Mensaje:
                    %s
                    """.formatted(
                    contacto.getNombre(),
                    contacto.getEmpresa() == null || contacto.getEmpresa().isBlank() ? "-" : contacto.getEmpresa(),
                    contacto.getTelefono(),
                    contacto.getEmail(),
                    contacto.getMensaje()
            ));
            mailSender.send(mensaje);
        } catch (MailException e) {
            log.warn("No se pudo enviar el correo de la consulta {}: {}", contacto.getId(), e.getMessage());
        }
    }
}
