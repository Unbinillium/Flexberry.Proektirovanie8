package Proektirovanie_.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proektirovanie_.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ГотТовар
 */
@Entity(name = "IISProektirovanie_ГотТовар")
@Table(schema = "public", name = "ГотТовар")
public class GotTovar {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Товар")
    private String товар;

    @Column(name = "КолВо")
    private Integer колво;

    @Column(name = "Одобрено")
    private Boolean одобрено;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;


    public GotTovar() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТовар() {
      return товар;
    }

    public void setТовар(String товар) {
      this.товар = товар;
    }

    public Integer getКолВо() {
      return колво;
    }

    public void setКолВо(Integer колво) {
      this.колво = колво;
    }

    public Boolean getОдобрено() {
      return одобрено;
    }

    public void setОдобрено(Boolean одобрено) {
      this.одобрено = одобрено;
    }


}