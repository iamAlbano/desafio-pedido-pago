import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import UserImage from '../user/userImage'
import FloatMenu from '../floatMenu'
import Status from '../user/status'

type Props = {
  header: string[],
  rows: object[],
};


const TableContainer = styled.table(`
                width: 100%;             
                border-collapse: collapse;
                text-align: center;
                table-layout: fixed;
                
                
  `
)

const TableHead = styled.tr(`
                  color: #587169;
                  font-weight: 600;  
                            
                                       
`)

const TableBody = styled.tbody(`

`)

const TableDiv = styled.div(`
                  height: 35vh;
                  width: 100%;
                  overflow-y:auto;
                  border-radius: 8px;
`)

const Head = styled.th(`
                overflow: hidden;
                text-overflow: ellipsis;
                padding: 1%;
                            
`)

const Row = styled.tr(`
        cursor: pointer;
        &:hover {
          background-color: rgba(29, 209, 149, .1);
        }
`)

const Element = styled.td(`
                padding: 1.7%;
                color: #587169;
                font-weight: 600;
                overflow: hidden;
                text-overflow: ellipsis;            
`)


const HeadContainer = styled.thead(`
                border: 2px solid #CAD6D1;  
                box-sizing: border-box;               
                border-radius: 8px 8px 0px 0px; 

`)

const RegisterContainer = styled.p(`
                margin-top: 2%;
                font-weight: 600;
                color: #587169;
`)



const AgentsTable = ( { header, rows }:Props ) => {
    return (
      <>
      <TableDiv>

        <TableContainer>
        <HeadContainer>
              <TableHead>
                  {
                    header.map((head) => {
                      return (
                        <Head key={ head} >
                          {head}
                        </Head>
                      )
                    })
                  }
              </TableHead>
            </HeadContainer>
      
          <TableBody>
              {
                rows?.map((row) => {
                  return (
                
                    <Row key={row?.agent_id}>
                      <Element>
                        <UserImage name={ row?.name } imagePath={ row?.image }/>
                      </Element>

                      <Element>
                        {row?.department}
                      </Element>

                      <Element>
                        {row?.role}
                      </Element>

                      <Element>
                        {row?.branch}
                      </Element>

                      <Element>
                        <Status status={row?.status} />
                        
                      </Element>

                      <Element>
                        <FloatMenu />
                      </Element>
                    </Row>
              
                  )
                })
              }
          </TableBody>
        </TableContainer>
            
      </TableDiv>

          <RegisterContainer>
            Mostrando 9 de { rows?.length } registros
          </RegisterContainer>


                

      </>
    );
}

export default AgentsTable;