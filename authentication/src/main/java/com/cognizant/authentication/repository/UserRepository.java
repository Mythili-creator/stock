package com.cognizant.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.authentication.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	User findByUserName(String userName);

	@Query(value = "SELECT COUNT(f.fa_mo_id) AS favourites_count FROM movie_cruiser.movie_item AS m  INNER JOIN finalcheck_v2.favorites AS f ON m.mo_id = f.fa_mo_id INNER JOIN finalcheck_v2.user AS u ON f.fa_us_id = u.us_id WHERE u.us_id = ?", nativeQuery = true)
	Double getFavoritesTotal(int userId);

}
