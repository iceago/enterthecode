package br.edu.senai.enterthecode.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Conquista implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private int idusuario;
    @Column
    private boolean segredosstalin;
    @Column
    private boolean foramaquinas;
    @Column
    private boolean easteregg;
    @Column
    private boolean entremelhores;
    @Column
    private boolean mestrepontos;
    @Column
    private boolean empresario;
    @Column
    private boolean conquistador;
    
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

    

    

    public boolean isSegredosstalin() {
        return segredosstalin;
    }

    public void setSegredosstalin(boolean segredosstalin) {
        this.segredosstalin = segredosstalin;
    }

    public boolean isForamaquinas() {
        return foramaquinas;
    }

    public void setForamaquinas(boolean foramaquinas) {
        this.foramaquinas = foramaquinas;
    }

    public boolean isEasteregg() {
        return easteregg;
    }

    public void setEasteregg(boolean easteregg) {
        this.easteregg = easteregg;
    }

    public boolean isEntremelhores() {
        return entremelhores;
    }

    public void setEntremelhores(boolean entremelhores) {
        this.entremelhores = entremelhores;
    }

    public boolean isMestrepontos() {
        return mestrepontos;
    }

    public void setMestrepontos(boolean mestrepontos) {
        this.mestrepontos = mestrepontos;
    }

    public boolean isEmpresario() {
        return empresario;
    }

    public void setEmpresario(boolean empresario) {
        this.empresario = empresario;
    }

    public boolean isConquistador() {
        return conquistador;
    }

    public void setConquistador(boolean conquistador) {
        this.conquistador = conquistador;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 19 * hash + this.id;
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
        final Conquista other = (Conquista) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

    
    
    
}
