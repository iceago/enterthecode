package br.edu.senai.enterthecode.controller;

import br.edu.senai.enterthecode.model.Modificador;
import br.edu.senai.enterthecode.repository.ModificadorRep;
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

@Path("/modificador")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ModificadorController {
    private final ModificadorRep jrep = new ModificadorRep();
    
    @GET
    public List<Modificador> getAll() {
        return jrep.pegatodosmodificadores();
    }
    
    @POST
    public Modificador salvar(Modificador j) {
        jrep.salvar(j,0);
        return j;
    }
    
    @POST
    @Path("{id}")
    public Modificador salvar(Modificador j,@PathParam("id") int id) {
        jrep.salvar(j, id);
        return j;
    }
    
    @POST
    @Path("{id}/{wt}")
    public Modificador salvarusado(Modificador j) {
        jrep.salvarusado(j);
        return j;
    }
    
    @GET
    @Path("{id}")
    public Modificador getpid(@PathParam("id") int id) {
       return jrep.buscarPorId(id);
    }
}
