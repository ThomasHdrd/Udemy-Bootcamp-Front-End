import React, { useEffect, useState } from 'react';
import test from './test';
import './App.css';
import home from './home';
import about from './about';
import { Route, Routes } from 'react-router-dom';
import Header from './component/header';

function app2() {
<>
<Routes>
    <Route path="/" element={<home />} />
    <Route path="about" element={
    <about />} />
    <home/>
    <about/>
    </Routes>
</>
}
export default app2;