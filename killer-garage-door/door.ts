// Tipos de estados
type DoorState = 'CLOSED' | 'OPENING' | 'OPEN' | 'CLOSING';

// Interfaz para el estado de la puerta
interface GarageDoorState {
  position: number;
  direction: number; // 1 para abrir, -1 para cerrar
  state: DoorState;
  paused: boolean;
}

// Estado inicial de la puerta
const initialState = (): GarageDoorState => ({
  position: 0,
  direction: 1,
  state: 'CLOSED',
  paused: false
});

// Función para manejar el botón
const handleButtonPress = (doorState: GarageDoorState): GarageDoorState => {
  switch (doorState.state) {
    case 'CLOSED':
      return {
        ...doorState,
        state: 'OPENING',
        direction: 1
      };
    case 'OPENING':
      return {
        ...doorState,
        paused: !doorState.paused
      };
    case 'OPEN':
      return {
        ...doorState,
        state: 'CLOSING',
        direction: -1
      };
    case 'CLOSING':
      return {
        ...doorState,
        paused: !doorState.paused
      };
    default:
      return doorState;
  }
};

// Función para manejar la detección de obstáculos
const handleObstacleDetection = (doorState: GarageDoorState): GarageDoorState => {
  switch (doorState.state) {
    case 'OPENING':
      return {
        ...doorState,
        state: 'CLOSING',
        direction: -1,
        paused: false
      };
    case 'CLOSING':
      return {
        ...doorState,
        state: 'OPENING',
        direction: 1,
        paused: false
      };
    default:
      return doorState;
  }
};

// Función para actualizar la posición
const updatePosition = (doorState: GarageDoorState): GarageDoorState => {
  if (doorState.paused) {
    return doorState;
  }

  switch (doorState.state) {
    case 'CLOSED':
      return {
        ...doorState,
        position: 0
      };
    case 'OPENING': {
      const newPosition = doorState.position + 1;
      if (newPosition === 5) {
        return {
          ...doorState,
          position: 5,
          state: 'OPEN'
        };
      }
      return {
        ...doorState,
        position: newPosition
      };
    }
    case 'OPEN':
      return {
        ...doorState,
        position: 5
      };
    case 'CLOSING': {
      const newPosition = doorState.position - 1;
      if (newPosition === 0) {
        return {
          ...doorState,
          position: 0,
          state: 'CLOSED'
        };
      }
      return {
        ...doorState,
        position: newPosition
      };
    }
    default:
      return doorState;
  }
};

// Función principal que procesa los eventos
export function door(input: string): string {
  let doorState = initialState();
  let output = '';
  let lastPosition = -1; // Para rastrear la última posición

  for (const event of input) {
    if (event === 'P') {
      doorState = handleButtonPress(doorState);
    } else if (event === 'O') {
      doorState = handleObstacleDetection(doorState);
    }
    
    doorState = updatePosition(doorState);
    
    if (doorState.position > 0 && doorState.position !== lastPosition) {
      output += doorState.position;
      lastPosition = doorState.position;
    }
  }

  return output;
}
