package com.cognizant.authentication.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.authentication.exception.UserAlreadyExistsException;
import com.cognizant.authentication.model.User;
import com.cognizant.authentication.service.AppUserDetailsService;

@RestController
@RequestMapping("/users")
public class UserController {

//	@Autowired
//	private InMemoryUserDetailsManager inMemoryUserDetailsManager;

	@Autowired
	AppUserDetailsService appUserDetailsService;

	public static List<UserDetails> userDetailsList = new ArrayList<>();

	public UserController() {
//		super();
//		userDetailsList.add(org.springframework.security.core.userdetails.User.withUsername("user")
//				.password(passwordEncoder().encode("pwd")).roles("USER").build());
//
//		userDetailsList.add(org.springframework.security.core.userdetails.User.withUsername("admin")
//				.password(passwordEncoder().encode("pwd")).roles("ADMIN").build());
//
//		userDetailsList.add(org.springframework.security.core.userdetails.User.withUsername("anonymousUser")
//				.password(passwordEncoder().encode("pwd")).roles("ANONYMOUS").build());
	}

//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}

	@PostMapping
	public void signup(@RequestBody @Valid User user) throws UserAlreadyExistsException {
//		boolean userDetails = inMemoryUserDetailsManager.userExists(user.getUserName());
//		if (!userDetails) {
//			inMemoryUserDetailsManager
//					.createUser(org.springframework.security.core.userdetails.User.withUsername(user.getUserName())
//							.password(passwordEncoder().encode(user.getPassword())).roles("USER").build());
//			userDetailsList.add(org.springframework.security.core.userdetails.User.withUsername(user.getUserName())
//					.password(passwordEncoder().encode(user.getPassword())).roles("USER").build());
//
//		}

		appUserDetailsService.signUp(user);
	}

}
