package vaniclean.demo.usuario;

import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import vaniclean.demo.exception.ResourceNotFoundException;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    public List<Usuario> getAll() {
        return usuarioRepository.findAll();
    }

    public Usuario getById(Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado con id: " + id));
    }

    public Usuario crear(UsuarioRequest request) {
        if (usuarioRepository.existsByEmail(request.email())) {
            throw new DataIntegrityViolationException("Ya existe un usuario con ese email");
        }
        Usuario usuario = new Usuario();
        usuario.setEmail(request.email());
        usuario.setPassword(passwordEncoder.encode(request.password()));
        usuario.setRol(request.rol() != null ? request.rol() : Rol.ADMIN);
        return usuarioRepository.save(usuario);
    }

    public Usuario actualizar(Long id, UsuarioRequest request) {
        Usuario usuario = getById(id);
        if (!usuario.getEmail().equals(request.email()) && usuarioRepository.existsByEmail(request.email())) {
            throw new DataIntegrityViolationException("Ya existe un usuario con ese email");
        }
        usuario.setEmail(request.email());
        if (request.password() != null && !request.password().isBlank()) {
            usuario.setPassword(passwordEncoder.encode(request.password()));
        }
        usuario.setRol(request.rol() != null ? request.rol() : usuario.getRol());
        return usuarioRepository.save(usuario);
    }

    public void delete(Long id) {
        if (!usuarioRepository.existsById(id)) {
            throw new ResourceNotFoundException("Usuario no encontrado con id: " + id);
        }
        usuarioRepository.deleteById(id);
    }
}
