import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Pastebin } from './pastebin';
describe('pastebin test case',() => {
it('should create an instance of Pastebin',()=> {
    expect(new Pastebin()).toBeTruthy();
});
it('should accept values', () => {
    let pastebin = new Pastebin();
    pastebin = {
        id: 111,
        title: "Hello world",
        language: "Ruby",
        paste: 'print "Hello"',
    }
    expect(pastebin.id).toEqual(111);
    expect(pastebin.language).toEqual("Ruby");
    expect(pastebin.paste).toEqual('print "Hello"');
});
});