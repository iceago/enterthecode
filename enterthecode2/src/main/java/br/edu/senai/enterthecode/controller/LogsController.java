package br.edu.senai.enterthecode.controller;

import br.edu.senai.enterthecode.model.Logs;
import br.edu.senai.enterthecode.repository.LogsRep;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("protected/logs")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LogsController {

    LogsRep jrep = new LogsRep();

    @GET
    public List<Logs> getAll() {
        return jrep.pegatodoslogs();
    }
    
    @POST
    public Logs salvar(Logs j) {
        jrep.salvar(j);
        return j;
    }

}
