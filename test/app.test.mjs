import test from "node:test";import assert from "node:assert/strict";import{ART,ESC_HOLD_MS,MAX_OBJECTS,isExitChord,normalizedKey,trimToLimit}from"../public/app.mjs";
test("requires a four second Escape hold",()=>assert.equal(ESC_HOLD_MS,4000));
test("recognizes only Ctrl Alt Q exit chord",()=>{assert.equal(isExitChord({ctrlKey:true,altKey:true,key:"q"}),true);assert.equal(isExitChord({ctrlKey:true,altKey:false,key:"q"}),false)});
test("normalizes printable and navigation keys",()=>{assert.equal(normalizedKey({key:" "}),"SPACE");assert.equal(normalizedKey({key:"b"}),"B");assert.equal(normalizedKey({key:"ArrowLeft"}),"←")});
test("keeps a calm bounded scene",()=>assert.deepEqual(trimToLimit([1,2,3,4]),[2,3,4]));
test("includes every requested family",()=>{const families=new Set(ART.map(x=>x[1]));for(const family of["zoo","farm","pet","plane","shuttle","spaceship","boat","dinosaur"])assert.ok(families.has(family));assert.equal(MAX_OBJECTS,3)});
