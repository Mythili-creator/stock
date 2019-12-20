package com.cognizant.stockExchange.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.stockExchange.exception.CompanyNotFoundException;
import com.cognizant.stockExchange.exception.UserAlreadyExistsException;
import com.cognizant.stockExchange.model.CompanyEntity;
import com.cognizant.stockExchange.model.Role;
import com.cognizant.stockExchange.model.StockEntity;
import com.cognizant.stockExchange.model.User;
import com.cognizant.stockExchange.repository.CompanyRepository;
import com.cognizant.stockExchange.repository.StockRepository;
@Service
public class StockExchangeService {


	@Autowired
	CompanyRepository companyRepository;
	
	@Autowired
	StockRepository stockRepository;
	



	public void addStock(StockEntity stock) throws Exception {
		if(stock.getStockExchange() == null ) {
			System.out.println("inside exception");
			throw new Exception();
			}
			else {
				stockRepository.save(stock);
			}
	
		
	}

	public List<CompanyEntity> getCompaniesList()  throws CompanyNotFoundException{
		System.out.println("inside service");
		List<CompanyEntity> c =companyRepository.findAll();
		System.out.println(c);
		if (c.size() == 0) {
			
			System.out.println("inside exception");
			throw new CompanyNotFoundException();
			}
		else
		{
			System.out.println("outside exception");
			return c;
		}
	}

	public List<StockEntity> getStockList() throws Exception{
		List<StockEntity> c =stockRepository.findAll();
		System.out.println(c);
		if (c.size() == 0) {
			
			System.out.println("inside exception");
			throw new Exception();
			}
		else
		{
			System.out.println("outside exception");
			return c;
		}
	}
	public void addCompaniesList(CompanyEntity company) throws Exception {
		
		if(company.getName() == null ) {
			System.out.println("inside exception");
		throw new Exception();
		}
		else {
			System.out.println("outside exception");
			StockEntity stock = stockRepository.findById(company.getStockCode());
			Set<StockEntity> stock1 = new HashSet<StockEntity>();
			stock1.add(stock);
			company.setStockList(stock1);
			companyRepository.save(company);
		}
		
	}
	
	
	public void modifyCompany(CompanyEntity company) {		
		StockEntity stock = stockRepository.findById(company.getStockCode());
		Set<StockEntity> stock1 = new HashSet<StockEntity>();
		stock1.add(stock);
		company.setStockList(stock1);
			companyRepository.save(company);

		}

	public CompanyEntity getCompanyById(long id) throws Exception{
		CompanyEntity c =companyRepository.findById(id).get();
		System.out.println(c);
		if (c.getId() == 0) {
			
			System.out.println("inside exception");
			throw new CompanyNotFoundException();
			}
		else
		{
			System.out.println("outside exception in yhjy");
			return c;
		}
	}
	public void modifyStock(StockEntity stock) {		
		stockRepository.save(stock);

	}

public StockEntity getStockById(long id) throws Exception{
	StockEntity c =stockRepository.findById(id);
	System.out.println(c);
	if (c.getId() == 0) {
		
		System.out.println("inside exception");
		throw new CompanyNotFoundException();
		}
	else
	{
		System.out.println("outside exception in yhjy");
		return c;
	}
}
		
	}


