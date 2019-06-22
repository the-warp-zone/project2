import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';

const styles = theme => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table height={height} width={width} {...tableProps} rowClassName={this.getRowClassName}>
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={headerProps =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const gamesList = [["Mar 19 2020", "Animal Crossing: New Horizons"],
["Dec 30 2019", "Luigi's Mansion 3"],
["Nov 14 2019", "Pokémon Sword"],
["Nov 14 2019", "Pokémon Sword & Pokémon Shield Double Pack"],
["Sep 29 2019", "Mario Kart Tour"],
["Sep 26 2019", "Dragon Quest XI S: Echoes of an Elusive Age - Definitive Edition"],
["Sep 19 2019", "The Legend of Zelda: Link's Awakening"],
["Sep 12 2019", "Daemon X Machina"],
["Aug 29 2019", "Astral Chain"],
["Jul 25 2019", "Fire Emblem: Three Houses"],
["Jul 18 2019", "Marvel Ultimate Alliance 3: The Black Order"],
["Jul 09 2019", "Dr. Mario World"],
["Jun 27 2019", "Super Mario Maker 2"],
["Apr 25 2019", "BOX BOY! + BOX GIRL!"],
["Apr 11 2019", "Nintendo Labo Toy-Con 04: VR Kit"],
["Mar 28 2019", "Yoshi's Crafted World"],
["Mar 07 2019", "Kirby's Extra Epic Yarn"],
["Feb 12 2019", "TETRIS 99"],
["Jan 10 2019", "New Super Mario Bros. U Deluxe"],
["Dec 30 2018", "Fire Emblem (Tentative Title)"],
["Dec 26 2018", "Mario & Luigi: Bowser's Inside Story + Bowser Jr's Journey"]];

function createData(id, date, title) {
  return { id, date, title};
}

const rows = [];

for (let i = 0; i < gamesList.length; i += 1) {
  rows.push(createData(i, gamesList[i][0], gamesList[i][1]));
}

export default function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 400, width: '20%', float: "right", margin: '15%' }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 200,
            label: 'Release Date',
            dataKey: 'date',
          },
          {
            width: 400,
            label: 'Game Title',
            dataKey: 'title',
          }
        ]}
      />
    </Paper>
  );
}