package vaniclean.demo.contacto;

import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Crear consulta es público (formulario de contacto); listar/ver es solo ADMIN (SecurityConfig)
@RestController
@RequestMapping("/api/contactos")
@RequiredArgsConstructor
public class ContactoController {

    private final ContactoService service;

    @PostMapping
    public ResponseEntity<Contacto> crear(@RequestBody ContactoRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.guardar(request));
    }

    @GetMapping
    public List<Contacto> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Contacto getById(@PathVariable Long id) {
        return service.getById(id);
    }
}
