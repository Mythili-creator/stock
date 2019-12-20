package com.cognizant.stockExchange.model;

import java.util.Set;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity 
@Table(name="stock_exchange")
public class StockEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "se_id")
	private long id;
	
	@Column(name = "se_stock_exchange")
	private  String stockExchange;
	
	@Column(name = "se_brief")
	private String brief;
	
	@Column(name = "se_contact_address")
	private String contact;
	
	@Column(name = "se_remark")
	private String remark;
	
	@JsonIgnore
	@ManyToMany(mappedBy="stockList", fetch=FetchType.EAGER)
	private Set<CompanyEntity> comapanyList;

	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Set<CompanyEntity> getComapanyList() {
		return comapanyList;
	}

	public void setComapanyList(Set<CompanyEntity> comapanyList) {
		this.comapanyList = comapanyList;
	}

	public StockEntity(int id, String stockExchange, String brief,
			String contact, String remark, Set<CompanyEntity> comapanyList) {
		super();
		this.id = id;
		this.stockExchange = stockExchange;
		this.brief = brief;
		this.contact = contact;
		this.remark = remark;
		this.comapanyList = comapanyList;
	}

	public StockEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "StockEntity [id=" + id + ", stockExchange=" + stockExchange
				+ ", brief=" + brief + ", contact=" + contact + ", remark="
				+ remark + ", comapanyList=" + comapanyList + "]";
	}

	

}
