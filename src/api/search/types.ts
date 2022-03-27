export interface ApiTopic {
  topic: Topic;
}

export interface Topic {
  id: string;
  name: string;
  relatedTopics?: Topic[];
  stargazerCount: number;
}
