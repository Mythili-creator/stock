package com.cognizant.stockExchange.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.stockExchange.model.Role;



public interface RoleRepository extends JpaRepository<Role, Integer> {

	Role findByRoleId(int id);

}
