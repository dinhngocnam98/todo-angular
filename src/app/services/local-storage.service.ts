import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any) {
    this.storage[key] = value;
  }

  get(key: string): string {
    return this.storage[key] || false;
  }

  setObject(key: string, value: any) {
    if(!value){
      return;
    }

    this.storage[key] = JSON.stringify(value);
  }

  getObject(key: string){
    return JSON.parse(this.storage[key] || '{}')
  }

  getValue<T>(key: string): T | null {
    const obj = JSON.parse(this.storage[key] || null)
    return <T>obj || null;
  }

  remove(key: string): void {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  get length(): number {
    return this.storage.length
  }

  get isStorageEmpty(): boolean {
    return this.length === 0;
  }
}