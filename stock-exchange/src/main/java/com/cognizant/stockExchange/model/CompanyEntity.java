package com.cognizant.stockExchange.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity 
@Table(name="company")
public class CompanyEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "co_id")
	private long id;
	
	@Column(name = "co_name")
	private String name;
	
	@Column(name = "co_ceo")
	private String ceo;
	
	@Column(name = "co_turnover")
	private float turnOver;
	
	@Column(name = "co_sector")
	private String sectorId;
	
	@Column(name = "co_board_of_directors")
	private String boardOfDirectors;
	
	@Column(name = "co_brief_writeup")
	private String brief;
	
	@Column(name="co_stock_code")
	private long stockCode;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name= "company_stock_exchange", joinColumns= @JoinColumn(name= "cs_co_id"), inverseJoinColumns=@JoinColumn(name="cs_se_id"))
	private Set<StockEntity> stockList;

	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCeo() {
		return ceo;
	}

	public void setCeo(String ceo) {
		this.ceo = ceo;
	}

	public float getTurnOver() {
		return turnOver;
	}

	public void setTurnOver(float turnOver) {
		this.turnOver = turnOver;
	}

	public String getSectorId() {
		return sectorId;
	}

	public void setSectorId(String sectorId) {
		this.sectorId = sectorId;
	}

	public String getBoardOfDirectors() {
		return boardOfDirectors;
	}

	public void setBoardOfDirectors(String boardOfDirectors) {
		this.boardOfDirectors = boardOfDirectors;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public long getStockCode() {
		return stockCode;
	}

	public void setStockCode(long stockCode) {
		this.stockCode = stockCode;
	}

	public Set<StockEntity> getStockList() {
		return stockList;
	}

	public void setStockList(Set<StockEntity> stockList) {
		this.stockList = stockList;
	}

	public CompanyEntity(int id, String name, String ceo, float turnOver,
			String sectorId, String boardOfDirectors, String brief,
			long stockCode, Set<StockEntity> stockList) {
		super();
		this.id = id;
		this.name = name;
		this.ceo = ceo;
		this.turnOver = turnOver;
		this.sectorId = sectorId;
		this.boardOfDirectors = boardOfDirectors;
		this.brief = brief;
		this.stockCode = stockCode;
		this.stockList = stockList;
	}

	public CompanyEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "CompanyEntity [id=" + id + ", name=" + name + ", ceo=" + ceo
				+ ", turnOver=" + turnOver + ", sectorId=" + sectorId
				+ ", boardOfDirectors=" + boardOfDirectors + ", brief=" + brief
				+ ", stockCode=" + stockCode +  "]";
	} 
	
	

	
	

}
