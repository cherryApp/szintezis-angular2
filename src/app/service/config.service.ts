import { HttpHeaders } from "@angular/common/http";

export class ConfigService {
  http: any = {
    json: {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json'}
      )
    },
    text: {
      headers: new HttpHeaders(
        { 'Content-Type': 'text/plain'}
      )
    }
  };
}
