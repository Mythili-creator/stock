package com.cognizant.stockExchange.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.stockExchange.exception.CompanyNotFoundException;
import com.cognizant.stockExchange.model.CompanyEntity;
import com.cognizant.stockExchange.model.StockEntity;
import com.cognizant.stockExchange.service.StockExchangeService;



@RestController
@RequestMapping("/stock")
public class StockExchangeController {
	@Autowired
	private StockExchangeService stockExchangeService;
	
	@PostMapping("/addStock")
	public void addStockExchange(@RequestBody @Valid StockEntity stock) throws Exception {
		stockExchangeService.addStock(stock);
	}
	
	
	
	@GetMapping()
	public List<StockEntity> getStockExchangesList () throws Exception {
			return stockExchangeService.getStockList();
	}	
	
	@GetMapping("/{id}")
	public StockEntity getStockById (@PathVariable long id) throws Exception {
			return stockExchangeService.getStockById(id);
	}
	
	
	@PutMapping
	public void modifyStock(@RequestBody StockEntity stock) {
		stockExchangeService.modifyStock(stock);
	}
	
}





