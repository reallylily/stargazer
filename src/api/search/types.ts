export interface ApiTopic {
  topic: Topic | null;
}

export interface Topic {
  name: string;
  relatedTopics?: Topic[];
  stargazerCount: number;
}

export default ApiTopic;
