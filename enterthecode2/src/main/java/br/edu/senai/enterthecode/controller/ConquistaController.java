package br.edu.senai.enterthecode.controller;

import br.edu.senai.enterthecode.model.Conquista;
import br.edu.senai.enterthecode.repository.ConquistaRep;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/conquista")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ConquistaController {
    private final ConquistaRep jrep = new ConquistaRep();
    
    @GET
    public List<Conquista> getAll() {
        return jrep.pegatodasconquistas();
    }
    
    @GET
    @Path("{id}")
    public Conquista getpid(@PathParam("id") int id) {
       return jrep.buscarPorId(id);
    }
    
    @POST
    public Conquista salvar(Conquista j) {
        jrep.salvar(j);
        return j;
    }
}
