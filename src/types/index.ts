export interface Message {
  name: string;
  email: string;
  message: string;
}

export interface WhatsAppResponse {
  success: boolean;
  error?: string;
}
