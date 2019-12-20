package com.cognizant.stockExchange.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.stockExchange.model.CompanyEntity;


@Repository
public interface CompanyRepository extends JpaRepository<CompanyEntity, Long> {

	Optional<CompanyEntity> findById(long id);

	

	


}
