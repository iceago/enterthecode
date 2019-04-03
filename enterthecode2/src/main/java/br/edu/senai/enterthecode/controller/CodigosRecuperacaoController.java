package br.edu.senai.enterthecode.controller;

import br.edu.senai.enterthecode.model.CodigosRecuperacao;
import br.edu.senai.enterthecode.repository.CodigosRecuperacaoRep;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/codrep")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CodigosRecuperacaoController {
    CodigosRecuperacaoRep crep = new CodigosRecuperacaoRep();
    
    @GET
    @Path("{id}")
    public CodigosRecuperacao pegaid(@PathParam("id") String email) {
        return crep.buscarPorEmail(email);
    }
}
