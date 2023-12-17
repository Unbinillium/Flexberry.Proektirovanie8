package Proektirovanie_.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proektirovanie_.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Перемещение
 */
@Entity(name = "IISProektirovanie_Перемещение")
@Table(schema = "public", name = "Перемещение")
public class Peremeshhenie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Ответственный")
    private String ответственный;

    @Column(name = "Продавец")
    private String продавец;

    @Column(name = "Товар")
    private String товар;

    @Column(name = "Цена")
    private Integer цена;

    @Column(name = "КолВо")
    private Integer колво;

    @Column(name = "Сумма")
    private Integer сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Postavshhik")
    @Convert("Postavshhik")
    @Column(name = "Поставщик", length = 16, unique = true, nullable = false)
    private UUID _postavshhikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Postavshhik", insertable = false, updatable = false)
    private Postavshhik postavshhik;


    public Peremeshhenie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getОтветственный() {
      return ответственный;
    }

    public void setОтветственный(String ответственный) {
      this.ответственный = ответственный;
    }

    public String getПродавец() {
      return продавец;
    }

    public void setПродавец(String продавец) {
      this.продавец = продавец;
    }

    public String getТовар() {
      return товар;
    }

    public void setТовар(String товар) {
      this.товар = товар;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }

    public Integer getКолВо() {
      return колво;
    }

    public void setКолВо(Integer колво) {
      this.колво = колво;
    }

    public Integer getСумма() {
      return сумма;
    }

    public void setСумма(Integer сумма) {
      this.сумма = сумма;
    }


}