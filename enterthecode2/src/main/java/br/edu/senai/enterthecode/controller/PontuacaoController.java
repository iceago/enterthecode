package br.edu.senai.enterthecode.controller;

import br.edu.senai.enterthecode.model.Pontuacao;
import br.edu.senai.enterthecode.model.Usuario;
import br.edu.senai.enterthecode.repository.PontuacaoRep;
import br.edu.senai.enterthecode.repository.UsuarioRep;
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

@Path("/pontos")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PontuacaoController {
    private final PontuacaoRep jrep = new PontuacaoRep();
    
    @GET
    public List<Pontuacao> getAll() {
       return jrep.listaPontuacoes();
    }

    @GET
    @Path("{id}")
    public Pontuacao getpid(@PathParam("id") int id) {
       return jrep.buscarPorId(id);
    }
    
    @GET
    @Path("{idu}/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    public int getcolocacao(@PathParam("idu") int idu) {
       return jrep.pegacolocacao(idu)+1;
    }
    
    @POST
    public Pontuacao salvar(Pontuacao j) {
        jrep.salvar(j);
        return j;
    }
    
    
}
