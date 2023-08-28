package com.example.demo.Entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="VIDEO_GAME")
public class VideoGame {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(nullable = false)
    private String title;
    private String genre;
    private Date releasedAt;
    private String photo;
    private Float rating;
    private String platforms;

    public VideoGame(long id, String title, String genre, Date releasedAt, String photo, Float rating, String platforms) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.releasedAt = releasedAt;
        this.photo = photo;
        this.rating = rating;
        this.platforms = platforms;
    }

    public String getTitle() {
        return title;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Date getReleasedAt() {
        return releasedAt;
    }

    public void setReleasedAt(Date releasedAt) {
        this.releasedAt = releasedAt;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public String getPlatforms() {
        return platforms;
    }

    public void setPlatforms(String platforms) {
        this.platforms = platforms;
    }

    public VideoGame() {
    }


}
