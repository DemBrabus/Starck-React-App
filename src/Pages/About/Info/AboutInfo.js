import React from 'react';
import './AboutInfo.scss';

export default function AboutInfo() {
    return (
        <div className='AboutInfo'>
            <div className='AboutInfo-Wrapper'>

                <p className='AboutInfo-Title'>Quick Info</p>

                <div className='AboutInfo-Table'>
                    <div className='AboutInfo-TableRow'>
                        <div className='AboutInfo-TableRow-Column'>
                            <p className='AboutInfo-TableRow-ColumnText'>Founded</p>
                        </div>
                        <div className='AboutInfo-TableRowColumn'>
                            <p className='AboutInfo-TableRow-ColumnText'>1980</p>
                        </div>
                    </div>

                    <div className='AboutInfo-TableRow'>
                        <div className='AboutInfo-TableRow-Column'>
                            <p className='AboutInfo-TableRow-ColumnText'>First Patent</p>
                        </div>
                        <div className='AboutInfo-TableRowColumn'>
                            <p className='AboutInfo-TableRow-ColumnText'>1982</p>
                        </div>
                    </div>

                    <div className='AboutInfo-TableRow'>
                        <div className='AboutInfo-TableRow-Column'>
                            <p className='AboutInfo-TableRow-ColumnText'>Number Of Employees</p>
                        </div>
                        <div className='AboutInfo-TableRowColumn'>
                            <p className='AboutInfo-TableRow-ColumnText'>300</p>
                        </div>
                    </div>

                    <div className='AboutInfo-TableRow'>
                        <div className='AboutInfo-TableRow-Column'>
                            <p className='AboutInfo-TableRow-ColumnText'>Number Of Dealers</p>
                        </div>
                        <div className='AboutInfo-TableRowColumn'>
                            <p className='AboutInfo-TableRow-ColumnText'>Over 400</p>
                        </div>
                    </div>

                    <div className='AboutInfo-TableRow'>
                        <div className='AboutInfo-TableRow-Column'>
                            <p className='AboutInfo-TableRow-ColumnText'>Revenue</p>
                        </div>
                        <div className='AboutInfo-TableRowColumn'>
                            <p className='AboutInfo-TableRow-ColumnText'>$850 Million(FY18)</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
