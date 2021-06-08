export class Message {
  content: string;
  timestamp: any;
  avatar: string;

  constructor(content: string, avatar: string, timestamp?: Date){
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
  }
}
