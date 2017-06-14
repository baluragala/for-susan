interface CDPlayer {
  play: () => boolean;
  pause: () => boolean;
  eject?: () => boolean;
}

interface CardReader {
  scan: () => void;
}

class SonyPlayer implements CDPlayer, CardReader {
  play() {
    return true;
  }

  pause() {
    return true;
  }

  scan() {
      
  }
}
