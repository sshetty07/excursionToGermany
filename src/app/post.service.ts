import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService{
    listOfPosts: Post[] = [
        new Post(
          'Nature 1',
          ' Hof is a town on the banks of the Saale in the northeastern corner of the German state of Bavaria, in the Franconian region, at the Czech border and the forested Fichtelgebirge and Frankenwald upland …',
          'https://previews.123rf.com/images/thoermer/thoermer2006/thoermer200600087/149680839-hof-germany-circa-may-2020-the-altstadt-street-in-old-town-of-hof-bavaria-germany.jpg',
          'test',
          new Date()
        ),
        new Post(
          'Hof',
          ' Hof is a town on the banks of the Saale in the northeastern corner of the German state of Bavaria, in the Franconian region, at the Czech border and the forested Fichtelgebirge and Frankenwald upland …',
          'https://thumbs.dreamstime.com/z/hof-germany-circa-may-st-marien-church-old-town-hof-bavaria-germany-st-marien-church-old-town-hof-184331180.jpg',
          'test',
          new Date()
        ),
        new Post(
          'Nature',
          ' Hof is a town on the banks of the Saale in the northeastern corner of the German state of Bavaria, in the Franconian region, at the Czech border and the forested Fichtelgebirge and Frankenwald upland …',
          'https://www.westend61.de/images/0000145613pw/europe-germany-rhineland-palatinate-mainz-view-of-osteiner-hof-CSF015696.jpg',
          'test',
          new Date()
        ),
      ];

      //facility 1
      getPosts() {
        return this.listOfPosts;

      }
      //facility 2
      deletePost(index: number) {
        this.listOfPosts.splice(index, 1);
      }
      //faciluity 3
      addPosts(post : Post){
        this.listOfPosts.push(post);
 
      }
      //facility 4
      updatePosts(index: number, post: Post){
        this.listOfPosts[index] = post;

      }
}