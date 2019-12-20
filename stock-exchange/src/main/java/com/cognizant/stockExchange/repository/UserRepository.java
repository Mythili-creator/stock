package com.cognizant.stockExchange.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.stockExchange.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	User findByUserName(String userName);

}
