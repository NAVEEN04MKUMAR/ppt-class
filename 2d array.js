




2D array lecture:1

class Solution {
    maximumWealth(accounts) {
        let maxWealthSoFar = 0;
 //logic get the current maximum and the overall maximum then combine the find the overall maximum find those value
        for (let account of accounts) {
            let currCustomerWealth = account.reduce((acc, curr) => acc + curr, 0);
            maxWealthSoFar = Math.max(maxWealthSoFar, currCustomerWealth);
        }
 
        return maxWealthSoFar;
    }
}


function spiralorder(matrix){
    const result=[];
    const rows=matrix.length;
    const columns=matrix[0].length;
    let up=0;
    let left=0;
    let bottom=rows-1;
    let right=columns-1;

while(result.length<rows*column){
//move from left to right first
for(let col=left;col<=right;col++){
    result.push(matrix[up][col]);
}
//move from the tom to bottom
for(let row=up+1;row<=bottom;row++){
result.push(matrix[col][right]);
}
 // Make sure we are now on a different row.
 if (up !== down) {
//move from right to left
for(let col=right-1;col>=left;col--){
    result.push(matrix(matrix[bottom][col]));
}
 }
 // Make sure we are now on a different column.
 if (left !== right) {
//move fro the bootom to up
for(let row=bottom-1;row>up;row--){
    result.push(matrix[row][left]);
}
}
left++;
right--;
up++;
down--;
}
return result;
}




New lecture:2

// //it is represent that we have to tranport the a[i][j] into the a[j][i] 
// function transpose(matrix){
//     const C = matrix[0].length;
//     const ans = new Array(C).fill(0).map(() => new Array(matrix));
//     for(let row=0;row<matrix.length;++row){
//         for(let col=0;col<matrix.length;++col){
//             ans[row][col]=[col][row];
//         }
//     }
//     return ans;
// }
// let arr=[[1,2],[2,1]];
// console.log(transpose(arr));
function transpose(A) {
    const R = A.length;
    const C = A[0].length;
    const ans = new Array(C).fill(0).map(() => new Array(R));
    for (let r = 0; r < R; ++r) {
        for (let c = 0; c < C; ++c) {
            ans[c][r] = A[r][c];
        }
    }
    return ans;
}
let matrix=[[1,2,3],[4,5,6],[7,8,9]];
console.log(transpose(matrix));


function istoeplitzmatrix(matrix){
for(let row=0;row<matrix.lenth;++row){
for(let col=0;col<matrix.length;++col){
//without taking the any space we get the value of the before pricipal diogonal element
  if(matrix[row-1][col-1]!=matrix[row][col]){
    return false;
       }
     } 
   }
 }

 let mat=[[1,2],[2,1]];
 console.log(istoeplitzmatrix(mat));

