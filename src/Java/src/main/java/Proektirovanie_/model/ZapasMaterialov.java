package Proektirovanie_.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proektirovanie_.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЗапасМатериалов
 */
@Entity(name = "IISProektirovanie_ЗапасМатериалов")
@Table(schema = "public", name = "ЗапасМатериалов")
public class ZapasMaterialov {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Товар")
    private String товар;

    @Column(name = "КолВо")
    private String колво;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;


    public ZapasMaterialov() {
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

    public String getКолВо() {
      return колво;
    }

    public void setКолВо(String колво) {
      this.колво = колво;
    }


}