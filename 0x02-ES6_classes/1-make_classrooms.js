import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomSize = [19, 20, 34];
  const rooms = roomSize.map((size) => new ClassRoom(size));
  return rooms;
}
