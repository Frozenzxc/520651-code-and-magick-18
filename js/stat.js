'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR = 150;
var FONT = 'PT Mono 16px';
var BASELINE = 'hanging';
var TEXT_COLOR = '#000';
var textHeight = TEXT_HEIGHT * 2 + GAP * 2;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y, color, font, baseline) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = baseline;
  ctx.fillText(text, x, y);
};

var renderBar = function (ctx, color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var barColor = function (player) {
  return player === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsla(240, 100%, 50%, ' + Math.random() + ')';
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, 'Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + GAP, TEXT_COLOR, FONT, BASELINE);
  renderText(ctx, 'Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + TEXT_HEIGHT, TEXT_COLOR, FONT, BASELINE);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var playerNameX = CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i;
    var playerNameY = CLOUD_Y + textHeight + TEXT_HEIGHT + MAX_BAR + GAP;
    var statBarX = CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i;
    var statBarY = CLOUD_Y + textHeight + TEXT_HEIGHT;
    var resultX = CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i;
    var resultY = CLOUD_Y + textHeight + MAX_BAR - (MAX_BAR * times[i]) / maxTime;

    renderText(ctx, players[i], playerNameX, playerNameY, '#000', FONT, BASELINE);
    renderBar(ctx, barColor(players[i]), statBarX, statBarY, BAR_WIDTH, MAX_BAR);
    renderBar(ctx, '#fff', statBarX, statBarY, BAR_WIDTH, MAX_BAR - (MAX_BAR * times[i]) / maxTime);
    renderText(ctx, Math.floor(times[i]), resultX, resultY, '#000', FONT, BASELINE);
  }
};
