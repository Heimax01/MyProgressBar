import styled from 'styled-components'

// tg  {border-collapse:collapse;border-spacing:0;}
// .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
//   overflow:hidden;padding:10px 5px;word-break:normal;}
// .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
//   font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
// .tg .tg-vjap{background-color:#6AA84F;border-color:inherit;text-align:left;vertical-align:bottom}
// .tg .tg-o2ju{background-color:#6AA84F;text-align:left;vertical-align:bottom}
// .tg .tg-7zrl{text-align:left;vertical-align:bottom}

export const Table = styled.table`
  .tg {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export const THead = styled.thead``

export const Tr = styled.tr`
  .tg-vjap {
    background-color: #6aa84f;
    border-color: inherit;
    text-align: left;
    vertical-align: bottom;
  }

  .tg-o2ju {
    background-color: #6aa84f;
    text-align: left;
    vertical-align: bottom;
  }

  .tg-7zrl {
    text-align: left;
    vertical-align: bottom;
  }
`

export const TH = styled.th`
  border-width: 0;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 2px 1px;
  word-break: normal;
  background-color: #c9c9c9;
`
