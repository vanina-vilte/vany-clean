package vaniclean.demo.contacto;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contactos")
@RequiredArgsConstructor
public class ContactoController {

    private final ContactoService service;

    @PostMapping
    public ResponseEntity<Contacto> crear(@RequestBody ContactoRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.guardar(request));
    }
}
