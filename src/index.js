/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-06-19 10:31:46
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-06-19 15:30:34
 */ 


import { d3Plot } from './d3Plot';
import * as d3 from 'd3';

d3.json("https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=freq&area=world&frequency=0.005").then(graph => {

    d3Plot(graph);

});