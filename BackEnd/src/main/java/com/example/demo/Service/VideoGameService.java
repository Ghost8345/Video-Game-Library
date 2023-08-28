package com.example.demo.Service;

import com.example.demo.Dao.VideoGameRepo;
import com.example.demo.Entity.VideoGame;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class VideoGameService {


    private VideoGameRepo videoGameRepo;

    @Autowired
    public VideoGameService(VideoGameRepo videoGameRepo) {
        this.videoGameRepo = videoGameRepo;
    }

    public Collection<VideoGame> getAllVideoGames(){
        return videoGameRepo.findAll();
    }

    public VideoGame getVideoGameById(long id){
        Optional<VideoGame> game = videoGameRepo.findById(id);
        if (videoGameRepo.findById(id).isEmpty())
            throw new NoSuchElementException("Video game not found");
        return videoGameRepo.findById(id).get();
    }

    public void deleteVideoGameById(long id){
        if (videoGameRepo.findById(id).isEmpty())
            throw new NoSuchElementException("Video game not found");

        videoGameRepo.deleteById(id);
    }

    public VideoGame updateVideoGame(VideoGame videoGame){
        if (videoGameRepo.findById(videoGame.getId()).isEmpty())
            throw new NoSuchElementException("Video game not found");
        return videoGameRepo.save(videoGame);
    }
    public VideoGame addVideoGame(VideoGame videoGame){
        if (videoGameRepo.findById(videoGame.getId()).isPresent())
            throw new IllegalStateException("Video game already exists");
        return videoGameRepo.save(videoGame);
    }
}
