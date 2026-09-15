import test from "node:test";import assert from "node:assert/strict";import{ART,BUILD_STEPS,ESC_HOLD_MS,isComplete,isExitChord,nextRevealCount,normalizedKey,visibleCharacterCount}from"../public/app.mjs";
test("requires a four second Escape hold",()=>assert.equal(ESC_HOLD_MS,4000));
test("recognizes only Ctrl Alt Q exit chord",()=>{assert.equal(isExitChord({ctrlKey:true,altKey:true,key:"q"}),true);assert.equal(isExitChord({ctrlKey:true,altKey:false,key:"q"}),false)});
test("normalizes printable and navigation keys",()=>{assert.equal(normalizedKey({key:" "}),"SPACE");assert.equal(normalizedKey({key:"b"}),"B");assert.equal(normalizedKey({key:"ArrowLeft"}),"←")});
test("one keystroke advances rather than completes a figure",()=>{const total=visibleCharacterCount(ART[0][2]);const first=nextRevealCount(0,total);assert.ok(first>0);assert.ok(first<total);assert.equal(isComplete(first,total),false)});
test("a figure completes after bounded build steps",()=>{const total=visibleCharacterCount(ART[0][2]);let shown=0;for(let i=0;i<BUILD_STEPS;i++)shown=nextRevealCount(shown,total);assert.equal(shown,total);assert.equal(isComplete(shown,total),true)});
test("includes every requested family",()=>{const families=new Set(ART.map(x=>x[1]));for(const family of["zoo","farm","pet","plane","shuttle","spaceship","boat","dinosaur"])assert.ok(families.has(family))});
