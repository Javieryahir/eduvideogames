class Game {
    id: number;
    name: string;
    description_raw: string;
    background_image: string;
    released: string;
    website: string;
  
    constructor(id: number, name: string, description_raw: string, background_image: string, released: string, website: string) {
      this.id = id;
      this.name = name;
      this.description_raw = description_raw;
      this.background_image = background_image;
      this.released = released;
      this.website = website;
    }
  }
  
  export default Game;