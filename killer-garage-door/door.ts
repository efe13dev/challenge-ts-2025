class ElectricGarageDoor {
  position = 0;
  direction = 1; // 1 for opening, -1 for closing
  state: DoorState = new ClosedState(this);

  handleButtonPress(): void {
    this.state.handleButtonPress();
  }

  handleObstacleDetection(): void {
    this.state.handleObstacleDetection();
  }

  updatePosition(): void {
    this.state.updatePosition();
  }

  setPosition(position: number): void {
    this.position = position;
  }

  setDirection(direction: number): void {
    this.direction = direction;
  }

  setState(state: DoorState): void {
    this.state = state;
  }
}

interface DoorState {
  handleButtonPress(): void;
  handleObstacleDetection(): void;
  updatePosition(): void;
}

// estado fechado, seta a posição pra 0 (fechado) e so tem mudança pro estado abrindo
class ClosedState implements DoorState {
  constructor(private door: ElectricGarageDoor) {}

  handleButtonPress(): void {
    this.door.setState(new OpeningState(this.door));
  }

  handleObstacleDetection(): void {
    // no effect
  }

  updatePosition(): void {
    this.door.setPosition(0);
  }
}

// estado abrindo, inicia não pausado e com os segundo zerados, quando pausado, muda o estado pra pausado e n da update na posição, quando não pausado ele aumenta os segundos em 1 e seta a posição dos segundos para 1, quando os segundos estão em 5, eme muda de estado para aberto. Ele também detecta se há um obstaculo e inverte o sentdido de acordo com isso
class OpeningState implements DoorState {
  private seconds = 0;
  private paused = false;

  constructor(private door: ElectricGarageDoor) {}

  handleButtonPress(): void {
    if (this.paused) {
      this.paused = false;
    } else {
      this.paused = true;
    }
  }

  handleObstacleDetection(): void {
    this.door.setDirection(-1); // reverse direction
    this.door.setState(new ClosingState(this.door));
  }

  updatePosition(): void {
    if (!this.paused) {
      this.seconds = this.door.position;
      this.seconds++;
      this.door.setPosition(this.seconds);
      if (this.seconds === 5) {
        this.door.setState(new OpenState(this.door));
      }
    }
  }
}

// Estado aberto, quando o botão é pressionado ela muda para o estado fechando, quando ele encontra um obstaculo muda a direção e o estado para fechando, sempre seta a posição para 5
class OpenState implements DoorState {
  constructor(private door: ElectricGarageDoor) {}

  handleButtonPress(): void {
    this.door.setState(new ClosingState(this.door));
  }

  handleObstacleDetection(): void {
    this.door.setDirection(-1); // reverse direction
    this.door.setState(new ClosingState(this.door));
  }

  updatePosition(): void {
    this.door.setPosition(5);
  }
}

// Estado Fechando, sempre seta os segundos para 0 e inicia despausado, ao encontrar um obstaculo ele seta a direção para 1 e muda o estado para abrindo, caso não esteja despausado ele vai aumentar os segundo alterar a posição para 5 - segundos e caso os segundos cheguem a 5, ele vai mudar o estado para fechado
class ClosingState implements DoorState {
  private seconds = 5;
  private paused = false;

  constructor(private door: ElectricGarageDoor) {}

  handleButtonPress(): void {
    if (this.paused) {
      this.paused = false;
    } else {
      this.paused = true;
    }
  }

  handleObstacleDetection(): void {
    this.door.setDirection(1); // reverse direction
    this.door.setState(new OpeningState(this.door));
  }

  updatePosition(): void {
    if (!this.paused) {
      this.seconds = this.door.position;
      this.seconds--;
      this.door.setPosition(this.seconds);
      if (this.seconds === 0) {
        this.door.setState(new ClosedState(this.door));
      }
    }
  }
}

export function door(input: string): string {
  const garageDoor = new ElectricGarageDoor();
  let output = '';
  let lastPosition = -1; // Para rastrear la última posición

  for (let i = 0; i < input.length; i++) {
    const event = input[i];
    if (event === 'P') {
      garageDoor.handleButtonPress();
    } else if (event === 'O') {
      garageDoor.handleObstacleDetection();
    }
    garageDoor.updatePosition();
    if (garageDoor.position > 0 && garageDoor.position !== lastPosition) {
      output += garageDoor.position;
      lastPosition = garageDoor.position;
    }
  }

  return output;
}
