package com.example.demo.Controller;

import com.example.demo.Entity.VideoGame;
import com.example.demo.Service.VideoGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin
@RequestMapping("/videogame")
public class VideoGameController {

    private VideoGameService videoGameService;

    @Autowired
    public VideoGameController(VideoGameService videoGameService) {
        this.videoGameService = videoGameService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Collection<VideoGame>> getAllVideoGames(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(videoGameService.getAllVideoGames());
        }
        catch (Exception exception){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<VideoGame> getVideoGameById(@PathVariable("id") long id){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(videoGameService.getVideoGameById(id));
        }
        catch (Exception exception){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @RequestMapping(value = "/{id}" , method = RequestMethod.DELETE)
    public ResponseEntity<String> deleteVideoGameByTitle(@PathVariable("id") long id){
        try {
            videoGameService.deleteVideoGameById(id);
            return ResponseEntity.status(HttpStatus.OK).body("Video game deleted successfully");
        }
        catch (Exception exception){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Video game not found");
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<VideoGame> updateVideoGame(@RequestBody VideoGame videoGame){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(videoGameService.updateVideoGame(videoGame));
        }
        catch (Exception exception){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<VideoGame> addVideoGame(@RequestBody VideoGame videoGame){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(videoGameService.addVideoGame(videoGame));
        }
        catch (Exception exception){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
