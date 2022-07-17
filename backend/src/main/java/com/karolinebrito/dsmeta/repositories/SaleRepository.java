package com.karolinebrito.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.karolinebrito.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
