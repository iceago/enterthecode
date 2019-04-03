package br.edu.senai.enterthecode.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Modificador implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private int idusuario;
    @Column
    private int quantidadecoleteinicial;
    @Column
    private int quantidadepocaohp;
    @Column
    private int quantidadepocaomana;
    @Column
    private int quantidadedobrodano;
    @Column
    private int quantidadesegundachance;
    @Column
    private int quantidadestarterpack;
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdusuario() {
        return idusuario;
    }

    public void setIdusuario(int idusuario) {
        this.idusuario = idusuario;
    }

    

   
    public int getQuantidadecoleteinicial() {
        return quantidadecoleteinicial;
    }

    public void setQuantidadecoleteinicial(int quantidadecoleteinicial) {
        this.quantidadecoleteinicial = quantidadecoleteinicial;
    }

    public int getQuantidadepocaohp() {
        return quantidadepocaohp;
    }

    public void setQuantidadepocaohp(int quantidadepocaohp) {
        this.quantidadepocaohp = quantidadepocaohp;
    }

    public int getQuantidadepocaomana() {
        return quantidadepocaomana;
    }

    public void setQuantidadepocaomana(int quantidadepocaomana) {
        this.quantidadepocaomana = quantidadepocaomana;
    }

    public int getQuantidadedobrodano() {
        return quantidadedobrodano;
    }

    public void setQuantidadedobrodano(int quantidadedobrodano) {
        this.quantidadedobrodano = quantidadedobrodano;
    }

    public int getQuantidadesegundachance() {
        return quantidadesegundachance;
    }

    public void setQuantidadesegundachance(int quantidadesegundachance) {
        this.quantidadesegundachance = quantidadesegundachance;
    }

    public int getQuantidadestarterpack() {
        return quantidadestarterpack;
    }

    public void setQuantidadestarterpack(int quantidadestarterpack) {
        this.quantidadestarterpack = quantidadestarterpack;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 97 * hash + this.id;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Modificador other = (Modificador) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

    
    
}
