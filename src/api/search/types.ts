export interface ApiTopic {
  topic: Topic | null;
}

export interface Topic {
  id: string;
  name: string;
  relatedTopics?: Topic[];
  stargazerCount: number;
}

export default ApiTopic;
