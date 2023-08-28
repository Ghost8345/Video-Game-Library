package com.example.demo.Dao;

import com.example.demo.Entity.VideoGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface VideoGameRepo extends JpaRepository<VideoGame, Long> {

}
