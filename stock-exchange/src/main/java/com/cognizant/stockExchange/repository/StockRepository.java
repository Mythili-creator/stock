package com.cognizant.stockExchange.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.stockExchange.model.StockEntity;

public interface StockRepository extends JpaRepository<StockEntity, Long>{

	

	StockEntity findById(long stockCode);

}
